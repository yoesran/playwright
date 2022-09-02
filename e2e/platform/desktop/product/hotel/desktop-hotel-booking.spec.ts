import { test, expect } from "@playwright/test";

test("Hotel Booking Journey", async ({ page, context }) => {
  await page.goto("https://traveloka.com/id-id/");
  const title = await page.title();

  expect(title).toBe("Traveloka - Superapp Solusi Kebutuhan Lifestyle Kamu");

  await page.click("text=Hotel");

  await page.fill(
    'input[data-testid="autocomplete-field"]',
    "Jakarta Indonesia"
  );

  await page.waitForRequest(
    "https://www.traveloka.com/api/v1/hotel/autocomplete"
  );

  await page.locator("div[data-testid='dropdown-menu-item']").first().click();

  await page.click("div[data-testid='search-submit-button']");

  const hotelName = await page.innerText(".tvat-hotelName", {strict: false});

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click(".tvat-searchListItem"),
  ]);
  await newPage.waitForLoadState();

  await expect(newPage.locator(`text=${hotelName}`).first()).toBeVisible();

  const roomName = await newPage.innerText('div[dir="auto"]:above(img[style="margin-right: 8px;"]) >> nth=0');

  await newPage.click("text=Pesan sekarang!");
  newPage.waitForNavigation();

  await expect(newPage.locator(`text=${roomName}`).first()).toBeVisible();
  await expect(newPage.locator(`text=${hotelName}`).first()).toBeVisible();
});
