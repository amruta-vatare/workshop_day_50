class PersonDetails{
    _id;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _phoneNo;
    get phoneNo() {
        return this._phoneNo;
    }
    set phoneNo(value) {
        this._phoneNo = value;
    }
    _address;
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    _state;
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    _city;
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    _zipcode;
    get zipcode() {
        return this._zipcode;
    }
    set zipcode(value) {
        this._zipcode = value;
    }

    toString(){
        return " Name : "+this.name+" Phone Number: "+this.phoneNo+" Address : "+this.address+" City : "+this.city+" State : "+this.state+" Zip Code : "+this.zipcode;
    }
}