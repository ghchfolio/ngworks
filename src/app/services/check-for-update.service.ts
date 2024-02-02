import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CheckForUpdateService {

    constructor(appRef: ApplicationRef, updates: SwUpdate) {

        // Allow the app to stabilize first, before starting
        // polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
        // const everySixHours$ = interval(6 * 60 * 60 * 1000);
        const everySixHours$ = interval(40000); // actually 40 secs for tests
        const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

        everySixHoursOnceAppIsStable$.subscribe(async () => {
            try {
                const updateFound = await updates.checkForUpdate();
                console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');

                if (updateFound) {
                    if (window.confirm('The lastet app version is ready. \nReload now?')) {
                        window.document.location.reload();
                    }
                }

            } catch (err) {
                console.error('Failed to check for updates:', err);
            }
        });
    }
}
