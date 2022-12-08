import React from 'react';
import styles from './mainPage.module.css';
import RegistrationModal from 'components/RegistrationModal/RegistrationModal';
import HeaderLogo from './HeaderLogo';

export default function MainPage() {
	return (
		<>
			<header className={styles.header}>
				<HeaderLogo />
			</header>
			<div className={styles.mainPageContainer}>
				<div className={styles.container}>
					<div className={styles.mainTextWrap}></div>
					<div className={styles.wrapper}></div>
				</div>
				<div className={styles.modalContainer}>
					<RegistrationModal />
					<div className={styles.footerIcon}></div>
				</div>
			</div>
		</>
	);
}
