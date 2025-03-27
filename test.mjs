import { pipeline } from 'stream/promises'
import split from 'split2'
import {
	jsonParseStream,
	jsonStringifyStream
} from './index.mjs'

await pipeline(
	process.stdin,
	split(),
	jsonParseStream(),
	jsonStringifyStream(),
	process.stdout)