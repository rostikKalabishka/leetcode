int missingNumber(List<int> nums) {
  int value = 0;
  for (int i = 0; i <= nums.length; i++) {
    if (!nums.contains(i)) {
      value = i;
    }
  }
  return value;
}
