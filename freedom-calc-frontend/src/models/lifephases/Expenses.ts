export class Expenses {
  taxes: number;
  housing: number;
  consumptions: number;
  socialSecurity: number;
  maintenance: number;
  insurance: number;
  interest: number;
  other: number;

  constructor(
    taxes: number,
    housing: number,
    consumptions: number,
    socialSecurity: number,
    maintenance: number,
    insurance: number,
    interest: number,
    other: number,
  ) {
    this.taxes = taxes;
    this.housing = housing;
    this.consumptions = consumptions;
    this.socialSecurity = socialSecurity;
    this.maintenance = maintenance;
    this.insurance = insurance;
    this.interest = interest;
    this.other = other;
  }

  getTotalExpenses(): number {
    return (
      this.taxes +
      this.housing +
      this.consumptions +
      this.socialSecurity +
      this.maintenance +
      this.insurance +
      this.interest +
      this.other
    );
  }
}
