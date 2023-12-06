import { Race } from "./types";

export function getChargeTimesThatBeatRecord(race: Race): number[] {
    const maxTime = race.time;
    const chargeTimesThatBeatTheRecord: number[] = [];

    for (let i = 0; i <= maxTime; i++) {
      const chargeTime = i;
      const driveTime = maxTime - chargeTime;
      const drivenDistance = chargeTime * driveTime;
      if (drivenDistance > race.record) {
        chargeTimesThatBeatTheRecord.push(chargeTime);
      }
    }

    console.log(`Race ${race.time}, ${race.record} has following Winning ChargeTimes`);
    console.log(chargeTimesThatBeatTheRecord);

    return chargeTimesThatBeatTheRecord;
  }