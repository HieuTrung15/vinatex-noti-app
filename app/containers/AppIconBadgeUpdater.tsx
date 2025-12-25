import { memo, useEffect, type ReactElement } from 'react';

import { useTotalUnreadCount } from '../lib/hooks/useTotalUnreadCount';
import { setBadgeCount } from '../lib/notifications';

const AppIconBadgeUpdater = memo((): ReactElement | null => {
	'use memo';

	const totalUnreadCount = useTotalUnreadCount();

	useEffect(() => {
		setBadgeCount(totalUnreadCount);
	}, [totalUnreadCount]);

	return null;
});

export default AppIconBadgeUpdater;
