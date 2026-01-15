export const Logo = () => {
	return (
		<a href="#">
			<img className="hidden lg:block" src={"/logo-mini.png"} alt="logo" />
			<img className="block lg:hidden" src={"/logo-icon.png"} alt="logo" />
		</a>
	);
};
