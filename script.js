/**
 * MANISHKA SINGH — WRITER & CREATIVE PORTFOLIO SCRIPT
 * Gentle, clean, human interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. WORK & SCREENSHOT DATA REPOSITORY
     -------------------------------------------------------------------------- */
  const workItems = [
  {
    image: "assets/thumb-viral-meme-163k.jpeg"   // 0: Viral post
  },
  {
    image: "assets/thumb-boo-collab.jpeg"        // 1: Boo App
  },
  {
    image: "assets/thumb-music-story.jpeg"       // 2: Music Launch
  },
  {
    image: "assets/comic.jpeg"       // 3: Comic Collab
  },
  {
    image: "assets/post.jpeg"         // 4: Tendencist
  },
    // --- COLUMN 2: CONTENT HIGHLIGHTS (Continued) ---
  /* 5 */ {
    category: "virals",
    image: "assets/dash.jpeg"   // 310K Views Overthinking Series
  },
  /* 6 */ {
    category: "culture",
    image: "assets/comics.jpeg"        // Pop Culture & Cinema Micro-Essays
  }
];

  /* --------------------------------------------------------------------------
     2. ESSAYS EXCERPT REPOSITORY
     -------------------------------------------------------------------------- */
  const essaysData = {
    "1": {
      tag: "Pop Culture",
      time: "6 min read",
      title: "Has Devotion Become Indian Cinema’s Newest Selling Point?",
      paragraphs: [
        "In a 1989 interview with French journalist Pierre Andre Boutang, Ray said, “We have a fairly backward audience here.” And nearly 30 years later, I don’t know if the audience itself has changed as much as the way commercial cinema has learned to understand it.",
        "More importantly, it has learned how to monetize it.",
        "The thought that Indian cinema may have found a new way of turning people’s beliefs into box-office numbers came to me while watching a film my mother insisted we see in a theatre."
      ]
    }
  };

  /* --------------------------------------------------------------------------
     3. WORK GALLERY FILTERING
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter || card.id === 'addMoreCard') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     4. WORK LIGHTBOX MODAL
     -------------------------------------------------------------------------- */
  const workModal = document.getElementById('workModal');
  const workModalScrim = document.getElementById('workModalScrim');
  const workModalClose = document.getElementById('workModalClose');
  const modalDismissBtn = document.getElementById('modalDismissBtn');

  const modalImg = document.getElementById('modalImg');
  const modalKicker = document.getElementById('modalKicker');
  const modalTitle = document.getElementById('modalTitle');
  const modalHighlight = document.getElementById('modalHighlight');
  const modalStory = document.getElementById('modalStory');
  const modalTakeaways = document.getElementById('modalTakeaways');

  function openWorkModal(index) {
  const item = workItems[index];
  if (!item || !item.image) return;

  // Set the photo
  modalImg.src = item.image;
  modalImg.alt = "Work Preview";

  // Open the lightbox
  workModal.classList.add('open');
  workModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

  function closeWorkModal() {
    workModal.classList.remove('open');
    workModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (card.id === 'addMoreCard') return;
      const idx = card.getAttribute('data-index');
      if (idx !== null) {
        openWorkModal(parseInt(idx, 10));
      }
    });
  });

  if (workModalClose) workModalClose.addEventListener('click', closeWorkModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeWorkModal);
  if (workModalScrim) workModalScrim.addEventListener('click', closeWorkModal);

  /* --------------------------------------------------------------------------
     5. ESSAY READER MODAL
     -------------------------------------------------------------------------- */
  const essayModal = document.getElementById('essayModal');
  const essayModalScrim = document.getElementById('essayModalScrim');
  const essayModalClose = document.getElementById('essayModalClose');
  const essayDoneBtn = document.getElementById('essayDoneBtn');

  const essayReaderTag = document.getElementById('essayReaderTag');
  const essayReaderTitle = document.getElementById('essayReaderTitle');
  const essayReaderTime = document.getElementById('essayReaderTime');
  const essayReaderText = document.getElementById('essayReaderText');

  document.querySelectorAll('.btn-read-essay').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const essayId = btn.getAttribute('data-read');
      const data = essaysData[essayId];
      if (!data) return;

      essayReaderTag.innerHTML = data.tag;
      essayReaderTitle.textContent = data.title;
      essayReaderTime.textContent = data.time;

      essayReaderText.innerHTML = '';
      data.paragraphs.forEach(p => {
        const pElem = document.createElement('p');
        pElem.textContent = p;
        essayReaderText.appendChild(pElem);
      });

      essayModal.classList.add('open');
      essayModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeEssayModal() {
    essayModal.classList.remove('open');
    essayModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (essayModalClose) essayModalClose.addEventListener('click', closeEssayModal);
  if (essayDoneBtn) essayDoneBtn.addEventListener('click', closeEssayModal);
  if (essayModalScrim) essayModalScrim.addEventListener('click', closeEssayModal);

  /* --------------------------------------------------------------------------
     6. RESUME MODAL
     -------------------------------------------------------------------------- */
  const resumeModal = document.getElementById('resumeModal');
  const resumeModalScrim = document.getElementById('resumeModalScrim');
  const resumeModalClose = document.getElementById('resumeModalClose');
  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const cvPreviewBtn = document.getElementById('cvPreviewBtn');

  function openResumeModal() {
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (viewResumeBtn) viewResumeBtn.addEventListener('click', openResumeModal);
  if (cvPreviewBtn) cvPreviewBtn.addEventListener('click', openResumeModal);
  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);
  if (resumeModalScrim) resumeModalScrim.addEventListener('click', closeResumeModal);

  /* --------------------------------------------------------------------------
     7. GUIDE MODAL (HOW TO ADD SCREENSHOTS)
     -------------------------------------------------------------------------- */
  const guideModal = document.getElementById('guideModal');
  const guideModalScrim = document.getElementById('guideModalScrim');
  const guideModalClose = document.getElementById('guideModalClose');
  const guideGotItBtn = document.getElementById('guideGotItBtn');
  const guideBtn = document.getElementById('guideBtn');

  function openGuideModal() {
    guideModal.classList.add('open');
    guideModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGuideModal() {
    guideModal.classList.remove('open');
    guideModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (guideBtn) guideBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openGuideModal();
  });
  if (guideModalClose) guideModalClose.addEventListener('click', closeGuideModal);
  if (guideGotItBtn) guideGotItBtn.addEventListener('click', closeGuideModal);
  if (guideModalScrim) guideModalScrim.addEventListener('click', closeGuideModal);

  /* --------------------------------------------------------------------------
     8. GLOBAL ESCAPE KEY HANDLER
     -------------------------------------------------------------------------- */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWorkModal();
      closeEssayModal();
      closeResumeModal();
      closeGuideModal();
    }
  });

  /* --------------------------------------------------------------------------
     9. CONTACT FORM
     -------------------------------------------------------------------------- */
  const activeForm = document.getElementById('noteForm') || document.getElementById('contactForm');

if (activeForm) {
  activeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('fName') || activeForm.querySelector('[name="name"]');
    const emailInput = document.getElementById('fEmail') || activeForm.querySelector('[name="email"]');
    const topicInput = document.getElementById('fTopic') || activeForm.querySelector('[name="topic"]');
    const msgInput = document.getElementById('fMessage') || activeForm.querySelector('[name="message"]');
    const feedbackBox = document.getElementById('formFeedback') || document.getElementById('formStatus');
    const submitBtn = activeForm.querySelector('button[type="submit"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const topic = topicInput ? topicInput.value : 'General Inquiry';
    const message = msgInput ? msgInput.value.trim() : '';

    if (!name || !email || !message) {
      if (feedbackBox) {
        feedbackBox.className = 'form-feedback error';
        feedbackBox.style.display = 'block';
        feedbackBox.textContent = 'Please fill out your name, email, and message.';
      }
      return;
    }

    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Note';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
    }

    if (feedbackBox) {
      feedbackBox.className = 'form-feedback loading';
      feedbackBox.style.display = 'block';
      feedbackBox.textContent = 'Sending your note to Manishka...';
    }

    try {
      // Send directly to manishka367@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/manishka367@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          topic: topic,
          message: message,
          _subject: `New Portfolio Note from ${name} [${topic}]`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        if (feedbackBox) {
          feedbackBox.className = 'form-feedback success';
          feedbackBox.style.display = 'block';
          feedbackBox.innerHTML = `✓ <strong>Note sent!</strong> Thank you ${name}, your note has been delivered to Manishka's inbox. She will reply to <em>${email}</em> soon.`;
        }
        activeForm.reset();
      } else {
        throw new Error((data && data.message) || 'Submission error');
      }
    } catch (err) {
      if (feedbackBox) {
        feedbackBox.className = 'form-feedback error';
        feedbackBox.style.display = 'block';
        const mailtoHref = `mailto:manishka367@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name + ': ' + topic)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
        feedbackBox.innerHTML = `Could not send automatically. <a href="${mailtoHref}" style="color:var(--pink-dark); font-weight:700; text-decoration:underline;">Click here to send via your email app &rarr;</a>`;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

  /* --------------------------------------------------------------------------
     10. COPY EMAIL BUTTON
     -------------------------------------------------------------------------- */
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('manishka367@gmail.com').then(() => {
        copyBtn.textContent = 'Copied!';
        showToast('Email address copied to clipboard');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2500);
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. HEADER SCROLL SHADOW
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     12. TOAST HELPER
     -------------------------------------------------------------------------- */
  function showToast(msg) {
    const toast = document.getElementById('siteToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

});


