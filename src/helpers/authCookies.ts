export const setAuthToken = async (token: string) => {
  await fetch("/api/auth/set-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
};

export const removeAuthToken = async () => {
  await fetch("/api/auth/remove-token", {
    method: "POST",
  });
};