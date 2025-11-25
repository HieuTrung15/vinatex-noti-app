import { StyleSheet } from 'react-native';

import sharedStyles from '../Styles';

export default StyleSheet.create({
	centeredScroll: {
		flexGrow: 1,
		minHeight: '100%',
		justifyContent: 'flex-start',
		paddingVertical: 48
	},
	contentWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 40,
		paddingHorizontal: 24
	},
	formWrapper: {
		alignItems: 'center',
		width: '100%',
		gap: 24
	},
	registerDisabled: {
		...sharedStyles.textRegular,
		...sharedStyles.textAlignCenter,
		fontSize: 16
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: 30
	},
	logo: {
		width: 250,
		height: 190,
		alignSelf: 'center',
		marginTop: 34
	},
	title: {
		...sharedStyles.textBold,
		fontSize: 22,
		marginBottom: 24,
		textAlign: 'center'
	},
	inputContainer: {
		marginVertical: 18
	},
	credentialsContainer: {
		gap: 25,
		width: '100%'
	},
	bottomContainer: {
		flexDirection: 'column',
		gap: 30,
		marginTop: 30,
		width: '100%'
	},
	bottomContainerGroup: {
		gap: 15
	},
	bottomContainerText: {
		...sharedStyles.textMedium,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 14
	}
});
