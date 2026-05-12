// QR Code Reader — PrettyFlights Totem de Check-in

const QRReader = {
  init() {
    console.log("[QRReader] Câmera inicializada");
    this.isActive = true;
  },

  decode(rawData) {
    if (!rawData) throw new Error("QR Code inválido ou vazio");
    const [flightCode, seatNumber, passengerId] = rawData.split("|");
    return { flightCode, seatNumber, passengerId };
  },

  stop() {
    this.isActive = false;
    console.log("[QRReader] Câmera desligada");
  }
};

module.exports = QRReader;