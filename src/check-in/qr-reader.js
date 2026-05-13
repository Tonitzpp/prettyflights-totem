// QR Code Reader — PrettyFlights Totem de Check-in

const QRReader = {
  init() {
    console.log("[QRReader] Câmera inicializada");
    this.isActive = true;
  },

  decode(rawData) {
    // HOT-042: proteção contra QR code em branco ou nulo
    if (!rawData || typeof rawData !== "string" || rawData.trim() === "") {
      console.error("[QRReader] QR Code inválido — exibindo mensagem ao passageiro");
      return null;
    }

    const parts = rawData.split("|");
    if (parts.length < 3) {
      console.error("[QRReader] Formato inesperado:", rawData);
      return null;
    }

    const [flightCode, seatNumber, passengerId] = parts;
    return { flightCode, seatNumber, passengerId };
  },

  stop() {
    this.isActive = false;
    console.log("[QRReader] Câmera desligada");
  }
};

module.exports = QRReader;