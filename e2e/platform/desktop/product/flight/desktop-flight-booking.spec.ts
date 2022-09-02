import { test, expect } from "@playwright/test";

test("Flight Booking Journey", async ({ page, context }) => {
  await page.goto("https://traveloka.com/id-id/");
  const title = await page.title();

  expect(title).toBe("Traveloka - Superapp Solusi Kebutuhan Lifestyle Kamu");

  await page.click('text=Tiket Pesawat');

  await page.fill('input[data-testid="airport-input-departure"]', 'Jakarta')
  await page.click('//div[contains(@data-cell-content, "Jakarta")]');

  await page.fill('input[data-testid="airport-input-destination"]', 'Surabaya')
  await page.click('//div[contains(@data-cell-content, "Surabaya")]');

  await page.click("div[data-testid='desktop-default-search-button']");

  const fromTo = await page.innerText('//h3[@role="heading"]/ancestor::div[@id="flight-ow-header"]');

  const from = fromTo.split(" ")[0];
  const to = fromTo.split(" ")[3];

  const airlineName = await page.innerText('div[dir="auto"]:right-of(img[width="28"]) >> nth=0');

  await page.click("text=Pilih Pergi");

  await page.click("button[data-id='tripConfirmStdzPrebooking']");

  await expect(page.locator(`text=${from}`).first()).toBeVisible();
  await expect(page.locator(`text=${to}`).first()).toBeVisible();

  await expect(page.locator(`text=${airlineName}`).first()).toBeVisible();
});
