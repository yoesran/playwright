import { test, expect } from "@playwright/test";

test("Experience Booking Journey", async ({ page, context }) => {
  await page.goto("https://traveloka.com/id-id/");
  const title = await page.title();

  await context.grantPermissions(["geolocation"], {
    origin: "https://traveloka.com",
  });

  expect(title).toBe("Traveloka - Superapp Solusi Kebutuhan Lifestyle Kamu");

  await page.click(
    "//*[text()='Xperience']"
  );

  await page.click(
    "//*[text()='Lihat kegiatan seru di Indonesia!']"
  );

  const expName = await page.innerText(
    "h3[dir='auto']:above(img[width='12']) >> nth=0"
  );

  await page.click(
    "h3[dir='auto']:above(img[width='12']) >> nth=0"
  );

  await expect(page.locator(`text=${expName}`).first()).toBeVisible();
  const ticketName = await page.innerText("//h3[@style='-webkit-line-clamp: 2;']");

  await page.click("//*[text()='Pilih'][1]");

  await expect(page.locator("//div[@style='max-height: 517px; top: 72px;']")).toBeVisible();

  await page.click("//div[@style='max-height: 517px; top: 72px;']//div[@style='transition-duration: 0s;']");

  await page.click("text=Pesan Sekarang");

  await expect(page.locator(`text=${expName}`).first()).toBeVisible();

  await expect(page.locator(`text=${ticketName}`).first()).toBeVisible();
});
