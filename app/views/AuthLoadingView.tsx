import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import I18n from '../i18n';
import { useTheme } from '../theme';
import sharedStyles from './Styles';
import { useAppSelector } from '../lib/hooks/useAppSelector';

const LOGO = require('../static/images/logo.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	text: {
		fontSize: 16,
		paddingTop: 10,
		...sharedStyles.textRegular,
		...sharedStyles.textAlignCenter
	},
	logo: {
		width: 96,
		height: 96,
		marginBottom: 24
	}
});

const AuthLoadingView = React.memo((): React.ReactElement => {
	const text = useAppSelector(state => state.app.text);
	const { colors } = useTheme();
	return (
		<View style={styles.container}>
			<Image source={LOGO} style={styles.logo} contentFit='contain' />
			{text ? (
				<>
					<ActivityIndicator color={colors.fontSecondaryInfo} size='large' />
					<Text style={[styles.text, { color: colors.fontDefault }]}>{`${text}\n${I18n.t('Please_wait')}`}</Text>
				</>
			) : null}
		</View>
	);
});

export default AuthLoadingView;
