import { trim0x } from "./strings";
export function calldataCost(calldata: string) {
	const trimmed = trim0x(calldata);
	const zeroBytesCount =
		trimmed.match(/.{2}/g)?.filter((x) => x === "00")?.length ?? 0;
	const nonZeroBytesCount = trimmed.length / 2 - zeroBytesCount;
	return BigInt(zeroBytesCount * 4 + nonZeroBytesCount * 16);
}
