import mapKeys from "lodash/mapKeys";
import memoize from "lodash/memoize";
import camelCase from "lodash/camelCase";

const memoizedCamelCase = memoize(camelCase);
export function trim0x(s: string): string {
	if (s.startsWith("0x")) {
		return s.substring(2);
	}
	return s;
}

export function snakeCaseToCamelCase(obj: any) {
	const camelCaseData = mapKeys(obj, (value, key) => camelCase(key));
	return camelCaseData;
}

// Convert object keys recursivly to camelCase using lodash
export function camelcaseObjectDeep(value: any): any {
	if (Array.isArray(value)) {
		return value.map(camelcaseObjectDeep);
	}

	if (value && typeof value === "object" && value.constructor === Object) {
		const obj: { [key: string]: any } = {}; // Add index signature to obj
		const keys = Object.keys(value);
		const len = keys.length;

		for (let i = 0; i < len; i++) {
			// Convert assignment to increment expression
			obj[memoizedCamelCase(keys[i])] = camelcaseObjectDeep(value[keys[i]]);
		}

		return obj;
	}

	return value;
}
