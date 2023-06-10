import colors from "./colors";

const bgDirective = {
  mounted(el, binding) {
    // [string]-[string:number]
    if (/^[^-]+\-\d+$/i.test(binding.value)) {
      const colorName = binding.value.split("-")[0];
      const colorValue = binding.value.split("-")[1];
      el.style.backgroundColor = `${colors[colorName][colorValue]}`;
    }
  },
};

export default bgDirective;
