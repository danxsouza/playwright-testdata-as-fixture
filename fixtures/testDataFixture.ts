import {test as baseTest} from '@playwright/test';

type MyFixture = {
    logindata: any;
    testdata: any;
}

export const test = baseTest.extend<MyFixture>({
    logindata: {
        uname: "Admin",
        pwd: "admin123",
    },

    testdata: {
        fname: "Sam",
        mname: "Johnson",
        lname: "Doe",
        email: "john.doe@example.com"
    }

})

