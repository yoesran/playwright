import { test, expect, devices } from "@playwright/test";

test.use({
  ...devices["Pixel 5"],
});

test("Hotel Booking Journey", async ({ page, context }) => {
  await page.goto("https://traveloka.com/id-id/");
  const title = await page.title();

  expect(title).toBe("Traveloka - Superapp Solusi Kebutuhan Lifestyle Kamu");

  await page.click(
    '//*[@id="__next"]/div[2]/div/div[1]/div[2]/div[1]/div/div[1]/div/div[2]'
  );

  await page.click(
    '//*[@id="__next"]/div[3]/div[1]/div[2]/div/div[1]/div[1]/div[2]'
  );

  await page.type("//html/body/div[3]/div/div[1]/div[1]/div/input", "Bandung");

  await page.click("//html/body/div[3]/div/div[2]/div[2]");

  await page.click('//*[@id="__next"]/div[3]/div[1]/div[2]/div/div[2]');

  const hotelName = await page.innerText(".tvat-hotelName");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click(".tvat-hotelList"),
  ]);
  await newPage.waitForLoadState();

  await expect(newPage.locator(`text=${hotelName}`).first()).toBeVisible();

  await newPage.click(
    '//*[@id="hotelAppContent"]/div/div/div[3]/div[5]/div/div[2]/div/div[2]/button'
  );

  const roomName = await newPage.innerText(
    '//*[@id="hotelAppContent"]/div/div/div[3]/div[6]/div/div[1]/div[2]/div[1]/div/div[3]/div[2]/div/div/div[1]/div[1]/h3'
  );

  await newPage.click(
    '//*[@id="hotelAppContent"]/div/div/div[3]/div[6]/div/div[1]/div[2]/div[1]/div/div[3]/div[2]/div/div/div[3]/div/div'
  );

  await expect(newPage.locator(`text=${hotelName}`).first()).toBeVisible();
  await expect(newPage.locator(`text=${roomName}`).first()).toBeVisible();
});
