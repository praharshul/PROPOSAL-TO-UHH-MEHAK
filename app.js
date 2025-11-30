function sayYes() {
  Swal.fire({
    title: "You said YES! ❤️",
    text: "Mehak, you just made the world brighter.",
    icon: "success",
    confirmButtonColor: "#ff2a65",
    confirmButtonText: "Forever with you ❤️",
    position: "center",      // ← CENTER POPUP
    heightAuto: false        // ← Fixes bottom shifting
  });

  confetti({
    particleCount: 250,
    spread: 80,
    origin: { y: 0.7 }
  });
}

function sayNo() {
  Swal.fire({
    title: "Oh... 😢",
    text: "My heart is still yours, Mehak.",
    icon: "error",
    confirmButtonColor: "#888",
    confirmButtonText: "Okay...",
    position: "center",      // ← CENTER POPUP
    heightAuto: false        // ← Fixes layout issues
  });
}
