export const isPrefersReducedMotion = () => {
	return !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
};
