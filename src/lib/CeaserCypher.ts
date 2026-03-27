export const SPANISH_CHARACTERS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"ñ",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
] as const;

export const SPANISH_CHARACTER_INDEX = SPANISH_CHARACTERS.map((character, index) => ({
	index,
	character,
}));

const SPANISH_ALPHABET = SPANISH_CHARACTERS.join("");

const shiftCharacter = (char: string, shift: number) => {
	const lower = char.toLowerCase();
	const index = SPANISH_ALPHABET.indexOf(lower);
	if (index === -1) return char;

	const alphabetSize = SPANISH_ALPHABET.length;
	const normalizedShift = ((shift % alphabetSize) + alphabetSize) % alphabetSize;
	const shifted = SPANISH_ALPHABET[(index + normalizedShift) % alphabetSize];

	if (!shifted) return char;
	return lower === char ? shifted : shifted.toUpperCase();
};

export const caesarEncode = (input: string, shift = 3) => {
	return [...input].map((char) => shiftCharacter(char, shift)).join("");
};

export const caesarDecode = (input: string, shift = 3) => {
	return caesarEncode(input, -shift);
};
