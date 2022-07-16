# ExponentialBackoff

A small/simple utility for unreliable async calls.

## Motivation

Network calls are unreliable - they can always fail due to the high load on the server that is being hammered an influx of requests.

This utility allows retrying a failed request using exponential backoffs. By default, it waits `10ms`, `20ms`, `40ms`, ... until it reaches the maximum number of retries.

## Example

```javascript
import CallWithBackoff from "index.ts";

async function myFunc() {
    // Some unreliable async function.
    const res = await CallWithBackoff(myUnreliableFunc(someParam1, someParam2,...));
}
```
