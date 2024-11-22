export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

export class BankAccount {
  private _balance: number;
  private _isOpen: boolean;
  
  constructor() {
    this._balance = 0;
    this._isOpen = false;
  }

  open(): void {
    if(this._isOpen) throw new ValueError();
    this._balance = 0;
    this._isOpen = true;
  }

  close(): void {
    if(!this._isOpen) throw new ValueError();
    this._isOpen = false;
  }

  deposit(amount: number): void {
    if(!this._isOpen || amount <= 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount: number): void {
    if(!this._isOpen || amount > this._balance || amount <= 0) throw new ValueError();
    this._balance -= amount;
  }

  get balance(): number {
    if (!this._isOpen) throw new ValueError();
    return this._balance;
  }
}
