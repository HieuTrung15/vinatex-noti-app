import { Q } from '@nozbe/watermelondb';
import { useEffect, useRef, useState } from 'react';
import type { Subscription } from 'rxjs';

import database from '../database';
import { useAppSelector } from './useAppSelector';

export const useTotalUnreadCount = (): number => {
	'use memo';

	const server = useAppSelector(state => state.server.server);
	const [totalUnreadCount, setTotalUnreadCount] = useState(0);
	const subscriptionRef = useRef<Subscription | null>(null);

	useEffect(() => {
		let cancelled = false;

		const observeUnreadCount = async () => {
			try {
				const db = database.active;
				const observable = await db
					.get('subscriptions')
					.query(Q.where('archived', false), Q.where('open', true))
					.observeWithColumns(['unread', 'hide_unread_status']);

				if (cancelled) {
					return;
				}
				subscriptionRef.current = observable.subscribe(rooms => {
					const nextTotal = rooms.reduce(
						(total, room) => (room.unread > 0 && !room.hideUnreadStatus ? total + room.unread : total),
						0
					);
					setTotalUnreadCount(nextTotal);
				});
			} catch {
				if (!cancelled) {
					setTotalUnreadCount(0);
				}
			}
		};

		observeUnreadCount();

		return () => {
			cancelled = true;
			subscriptionRef.current?.unsubscribe();
		};
	}, [server]);

	return totalUnreadCount;
};
