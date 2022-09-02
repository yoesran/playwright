import { test, expect, devices } from "@playwright/test";

test.use({
  ...devices["Pixel 5"],
});

test("Flight Booking Journey", async ({ page, context }) => {
  await page.goto("https://traveloka.com/id-id/");
  const title = await page.title();

  expect(title).toBe("Traveloka - Superapp Solusi Kebutuhan Lifestyle Kamu");

  await page.click(
    '//*[@id="__next"]/div[2]/div/div[1]/div[2]/div[1]/div/div[1]/div/div[1]'
  );
  await page.click('//*[@id="__next"]/div[3]/div[2]/div[4]');

  // await page.click("//html/body/div[8]/div/div[2]/div/div[2]/div/div[3]");

  // await page.click("text=OK, Mengerti");

  const fromTo = await page.innerText('//*[@id="__next"]/div[2]/div/div[2]/h3');

  const from = fromTo.split(" ")[0];
  const to = fromTo.split(" ")[3];

  const airlineName = await page.innerText(
    '//*[@id="__next"]/div[5]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div'
  );

  await page.click('//*[@id="__next"]/div[5]/div[2]');
});
