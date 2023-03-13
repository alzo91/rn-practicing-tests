const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it("should have splsh screen", async () => {
  //   await expect(element(by.id("screen-title"))).toBeVisible();
  // });

  it("should able to check elements at the SignIn Screen", async () => {
    // await expect(element(by.id("loading"))).toBeVisible();

    await element(by.id("input-email")).replaceText("alzo@gmail.com");
    await element(by.id("input-nickname")).replaceText("alzo91");
    // await expect(element(by.id("button-signin"))).toBeVisible();
    await sleep(1250);
    await element(by.id("button-signin")).tap();
  });

  // it("should show world screen after tap", async () => {
  //   await element(by.id("world_button")).tap();
  //   await expect(element(by.text("World!!!"))).toBeVisible();
  // });
});
