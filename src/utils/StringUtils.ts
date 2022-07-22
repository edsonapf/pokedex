class StringUtils {

	static formatNameCamelCase(name: string) {
		const splittedName = name.split(' ');

		return splittedName.map((name) => {
			return this.toFirstCharUpperCase(name);
		}).join(' ');
	}

	static toFirstCharUpperCase(text: string) {
		return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
	}
}

export default StringUtils;