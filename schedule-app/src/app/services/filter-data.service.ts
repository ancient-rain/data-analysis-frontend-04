import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable()
export class FilterDataService {
    days: [string];
    hours: [number];
    finalLength: number;

    constructor() {
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.hours = [805, 900, 955, 1050, 1145, 1240, 1335, 1430, 1525, 1620];
        this.finalLength = 400;
    }

    getDays(): [string] {
        return this.days;
    }

    getHours(): [number] {
        return this.hours;
    }

    getFinalLength(): number {
        return this.finalLength;
    }

    isFinal(start, end): boolean {
        return end - start >= this.finalLength;
    }

    getClassTime(course: Course) {
        const courseTime = course.meetTimes.replace(/  /g, ' ');
        const times = courseTime.split(' ');
        return this.filterClass(courseTime, times);
    }

    filterClass(courseTime: string, times: string[]) {
        let time = '';
        for (let i = 0; i < times.length; i = i + 2) {
            const days = times[i];
            const hours = times[i + 1].split('-');
            const start = parseInt(hours[0], 10);
            const end = parseInt(hours[1], 10);

            if (days.length <= 1) {
                const isFinal = this.isFinal(start, end);
                if (!isFinal) {
                    time += this.getFilteredClass(days, start, end);
                }
            } else {
                time += this.getFilteredClass(days, start, end);
            }
        }
        return time;
    }

    getFilteredClass(days: string, start: number, end: number) {
        let isStarted = false;
        let hoursStr = '';

        for (let i = 0; i < this.hours.length; i++) {
            const curHour = this.hours[i];
            if (start <= curHour && !isStarted) {
                isStarted = true;
                hoursStr += i + 1;
            } else if (end <= curHour && isStarted) {
                if (hoursStr !== `${i}`) {
                    hoursStr += `-${i}`;
                }
                hoursStr += ' ';
                break;
            } else if (isStarted && i + 1 >= this.hours.length) {
                hoursStr += `-${i + 1}`;
                hoursStr += ' ';
                break;
            }
        }

        const classStr = `${days}/${hoursStr}`;

        return classStr === '/' ? 'TBA' : classStr;
    }

    updateSchedule(schedule: Map<string, string>, courses: Course[]) {
        for (let i = 0; i < courses.length; i++) {
            const meetTimes = courses[i].meetTimes.replace(/  /g, ' ');
            const times = meetTimes.split(' ');

            for (let j = 0; j < times.length; j = j + 2) {
                const days = times[j];
                const hours = times[j + 1].split('-');
                const start = parseInt(hours[0], 10);
                const end = parseInt(hours[1], 10);

                if (days.length <= 1) {
                    const isFinal = this.isFinal(start, end);
                    if (!isFinal) {
                        this.addClass(schedule, days, courses[i].name, start, end);
                    }
                } else {
                    this.addClass(schedule, days, courses[i].name, start, end);
                }
            }
        }
    }

    addClass(schedule: Map<string, string>, days: string, name: string, start: number, end: number) {
        for (let i = 0; i < days.length; i++) {
            const day = this.getDay(days.charAt(i));
            let isStarted = false;

            for (let j = 0; j < this.hours.length; j++) {
                const curHour = this.hours[j];
                if (start <= curHour && !isStarted) {
                    schedule.set(`${day}-${curHour}`, `${name}`);
                    isStarted = true;
                } else if (end >= curHour && isStarted) {
                    schedule.set(`${day}-${curHour}`, `${name}`);
                } else if (end <= curHour && isStarted) {
                    break;
                }
            }
        }
    }

    getDay(day: string) {
        switch (day) {
            case 'M':
                return 'Monday';
            case 'T':
                return 'Tuesday';
            case 'W':
                return 'Wednesday';
            case 'R':
                return 'Thursday';
            case 'F':
                return 'Friday';
            default:
                return 'Saturday';
        }
    }
}
