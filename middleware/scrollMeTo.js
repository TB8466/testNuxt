function scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop-100;

    window.scrollTo(0, top);
  }