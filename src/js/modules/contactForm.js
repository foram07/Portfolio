// ============================================================
// CONTACT FORM  —  src/js/modules/contactForm.js
// Handles submission UX. Swap the fetch() call for your
// real backend (Formspree, Netlify Forms, etc.).
// ============================================================

function initContactForm() {
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector(".btn");
    if (submitBtn) {
      submitBtn.style.pointerEvents = "none";
      submitBtn.style.opacity = "0.7";
      submitBtn.textContent = "Sending…";
    }

    // ── Real backend: uncomment and set your endpoint ──────
    // try {
    //   const res = await fetch("https://formspree.io/f/YOUR_ID", {
    //     method:  "POST",
    //     headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     body:    JSON.stringify(Object.fromEntries(new FormData(form))),
    //   });
    //   if (!res.ok) throw new Error("Submission failed");
    // } catch {
    //   submitBtn.textContent = "Error — try again";
    //   submitBtn.style.pointerEvents = "";
    //   submitBtn.style.opacity = "";
    //   return;
    // }
    // ──────────────────────────────────────────────────────

    // Simulated delay (remove once real backend is wired up)
    await new Promise(r => setTimeout(r, 1000));

    if (success)    success.style.display = "block";
    if (submitBtn)  submitBtn.style.display = "none";
    form.reset();
  });
}