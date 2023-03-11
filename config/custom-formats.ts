// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	{
		section: "Singles in your area",
		column: 5,
	},
	{
		name: "[Gen 4] Ice Platinum Random Battle",
		desc: `beat up`,
		mod: 'gen4iceplatinum',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 4] Ice Platinum OU",
		desc: `beat up`,
		mod: 'gen4iceplatinum',
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber'],
	},
	{
		name: "[Gen 5] White Illusion OU",
		desc: `where where are the gen 5 abilities`,
		mod: 'gen5whiteillusion',
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber'],
	},
];