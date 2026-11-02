const assert = require("node:assert/strict");

function timeToMinutes(time: string): number {
    const regex = /(?<hour>\d\d):(?<minute>\d\d)/;
    const { hour, minute } = time.match(regex).groups;
    return parseInt(hour) * 60 + parseInt(minute);
}

/**
 *  Given a chronological log of local "HH:MM" timestamps from the night daylight saving
 *  time ends, return the actual number of minutes between the first and last entries.
 *  The log contains a consecutive pair that reveals the clock’s one-hour rollback.
 */
function elapsedMinutes(times: string[]) {
    return timeToMinutes(times.at(-1)) - timeToMinutes(times[0]) + 60;
}

assert.equal(
    elapsedMinutes(["00:50", "01:10", "01:50", "01:10", "02:10"]),
    140,
);
assert.equal(elapsedMinutes(["01:55", "01:05", "01:25", "01:40"]), 45);
