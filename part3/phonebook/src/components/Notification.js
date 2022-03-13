const Notification = ({notificationMessage}) => {
	if (notificationMessage === null) {
		return null;
	}

	return (
		<div className={notificationMessage.class}>
			{notificationMessage.message}
		</div>
	)
}

export default Notification