export const createPopupHTML = (loc: any) => {
  return `
    <div style="
      width: 250px;
      padding: 12px;
      border-radius: 12px;
      background: transparent;
      font-family: sans-serif;
    ">
      <img src="${loc.image}" alt="${loc.name}" 
        style="width:100%; height:120px; object-fit:cover; border-radius:8px; margin-bottom:8px;" />
      <h3 style="margin:0; font-size:16px; color:#DB5F34; font-weight:600;">
        ${loc.name}
      </h3>
      <p style="margin:4px 0; font-size:12px; color:#555;">
        ${loc.address}
      </p>
      <p style="margin:4px 0; font-size:12px; color:#555;">
        ⭐ ${loc.rating} (${loc.reviewCount} reviews) • ${loc.priceRange}
      </p>
      <p style="margin:4px 0; font-size:12px; color:#555;">
        ${loc.cuisine.join(", ")}
      </p>
      <p style="margin:4px 0; font-size:12px; color:#555;">
        ${loc.openHours} • ${loc.distance} away
      </p>
      <span style="
        display:inline-block;
        padding:4px 8px;
        background:${loc.verificationStatus === 'verified' ? '#4caf50' : '#fbbf24'};
        color:white; 
        border-radius:6px;
        font-size:11px;
        font-weight:500;
      ">
        ${loc.verificationStatus === 'verified' ? 'Verified' : 'Pending'}
      </span>
    </div>
  `;
};
