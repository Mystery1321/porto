function siteSearch(){
  const q = document.getElementById('searchInput').value.toLowerCase();
  if(!q) return;
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const found = sections.find(s => s.textContent.toLowerCase().includes(q));
  if(found){ found.scrollIntoView({behavior:'smooth'}); }
}

function submitContact(){
  alert('Terima kasih! Pesan Anda sudah tercatat (demo).');
}
