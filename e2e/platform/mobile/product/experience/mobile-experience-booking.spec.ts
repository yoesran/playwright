import { test, expect, devices } from "@playwright/test";

test.use({
  ...devices["Pixel 5"],
});

test("Experience Booking Journey", async ({ page, context }) => {
  await page.goto("https://traveloka.com/id-id/");
  const title = await page.title();

  expect(title).toBe("Traveloka - Superapp Solusi Kebutuhan Lifestyle Kamu");

  await context.grantPermissions(["geolocation"], {
    origin: "https://m.traveloka.com",
  });

  await page.click(
    '//*[@id="__next"]/div[2]/div/div[1]/div[2]/div[1]/div/div[1]/div/div[3]'
  );

  await page.click('//*[@id="__next"]/div[5]/div/div[1]/div/div[2]');

  // await page.click("//html/body/div[5]/div[2]/div/div[1]/div");

  await page.locator("text=Indonesia").nth(3).click();

  const expName = await page.innerText(
    '//*[@id="__next"]/div[5]/div/div/div[2]/div[2]/div[1]/div/div/div[1]/div[2]/div[1]/div/div[2]/h3'
  );

  await page.click(
    '//*[@id="__next"]/div[5]/div/div/div[2]/div[2]/div[1]/div/div/div[1]'
  );

  await expect(page.locator(`text=${expName}`).first()).toBeVisible();

  await page.click('//*[@id="__next"]/div[5]/div[2]/div[1]');

  const ticketName = await page.innerText(
    //*[@id="__next"]/div[3]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div/div[2]/h3
    '//*[@id="__next"]/div[3]/div/div[3]/div[2]/div/div[1]/h3'
  );

  await page.click(
    //*[@id="__next"]/div[3]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div/div[3]/div[2]/div
    '//*[@id="__next"]/div[3]/div/div[3]/div[2]/div/div[2]/div[2]/div'
  );

  await page.click("div[style='transition-duration: 0s;'] >> nth=3");

  await page.click(
    '//*[@id="__next"]/div[3]/div/div[3]/div[1]/div[2]/div/div[3]'
  );

  await expect(page.locator(`text=${expName}`).first()).toBeVisible();
  await expect(page.locator(`text=${ticketName}`).first()).toBeVisible();
});
