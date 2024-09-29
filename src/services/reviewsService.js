export const fetchYotpoReviews = async (productId) => {
  const apiUrl = `https://api-cdn.yotpo.com/v3/storefront/store/KeW05u6zFLecWzPtQ9SmteRYmQdzYklWVmDzKt25/product/${productId}/reviews?page=1&perPage=5&sort=date,rating,images,badge`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return response.json();
};
