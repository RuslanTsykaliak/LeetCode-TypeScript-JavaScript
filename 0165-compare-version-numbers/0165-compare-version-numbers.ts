function compareVersion(version1: string, version2: string): number {
  // Split the version strings into arrays and convert each part to a number
  const v1 = version1.split('.').map((str) => parseInt(str));
  const v2 = version2.split('.').map((str) => parseInt(str));

  // Loop through the parts of the versions up to the length of the longer version
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    // Get the current part of each version, defaulting to 0 if it doesn't exist
    const currV1 = v1[i] || 0;
    const currV2 = v2[i] || 0;

    // If the current part of version1 is greater than version2, return 1
    if (currV1 > currV2) return 1;
    // If the current part of version1 is less than version2, return -1
    if (currV1 < currV2) return -1;
  }

  // If all parts are equal, return 0
  return 0;
}
