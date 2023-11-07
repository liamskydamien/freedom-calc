export class PersonalInformation{
    firstName: string;
    lastName: string;
    birthDate: Date;
    expectedAge: number;
    gender: string;
    currency: string;

    constructor(firstName: string,
                lastName: string,
                birthDate: Date,
                expectedAge: number,
                gender: string,
                currency: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.expectedAge = expectedAge;
        this.gender = gender;
        this.currency = currency;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

    getAge(): number {
        let today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        let month = today.getMonth() - this.birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

}
