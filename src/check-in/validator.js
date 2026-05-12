// Validator — PrettyFlights Totem de Check-in

const Validator = {
  validate(reservation) {
    const required = ["flightCode", "seatNumber", "passengerId"];
    return required.every(field => Boolean(reservation[field]));
  },

  isWithinCheckInWindow(departureTime) {
    const diff = new Date(departureTime) - new Date();
    const hours = diff / (1000 * 60 * 60);
    return hours >= 0 && hours <= 24;
  }
};

module.exports = Validator;