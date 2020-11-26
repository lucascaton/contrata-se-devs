export const urlWithCampaignParams = (url) => {
  const campaignParams = new URLSearchParams({
    utm_source: "contrata-se-devs.lucascaton.com.br",
    utm_medium: "referral",
    utm_campaign: "apply-link",
  }).toString();

  const sign = url.includes("?") ? "&" : "?";

  return `${url}${sign}${campaignParams}`;
};
