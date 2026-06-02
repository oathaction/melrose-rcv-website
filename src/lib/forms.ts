export const signupFormConfig = {
  endpoint: import.meta.env.PUBLIC_SIGNUP_FORM_ENDPOINT || "",
  method: "post",
};

export function hasSignupEndpoint() {
  return signupFormConfig.endpoint.length > 0;
}
