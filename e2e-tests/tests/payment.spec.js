import { test, expect } from "playwright/test"

let UI_URL = "http://localhost:3000"

test("should check for the payment success", async ({ page }) => {
  await page.goto(UI_URL)
  await expect(page.getByText("Shop Now").nth(0)).toBeVisible()
  await page.getByRole("button", { name: "Shop Now" }).nth(0).click()

  await expect(page.getByText("Speaker").nth(0)).toBeVisible()

  const quantityHeading = page.locator('h3:has-text("Quantity:") + .quantity-desc')
  await expect(quantityHeading).toBeVisible()

  const quantityNum = page.locator(".quantity-desc .num")
  await expect(quantityNum).toHaveText("1")

  await page.locator(".quantity-desc .minus").click()
  //quantity must be atleast 1 for the featured product
  await expect(quantityNum).toHaveText("1")

  await page.locator(".quantity-desc .plus").click()
  await expect(quantityNum).toHaveText("2")

  await page.getByRole("button", { name: "Buy Now" }).click()
  await expect(page.getByText("2 Speaker added to the cart.")).toBeVisible()

  await expect(page.getByText("Your Cart")).toBeVisible()
  const payBtn = page.getByRole("button", { name: "PAY WITH STRIPE" })
  await payBtn.click()

  //   cosnt [iframe]=await Promise.all([
  //     page.waitForEvent('frame'),
  //     payBtn.click()

  //   ])

  await page.locator("[name=email]").fill("29anubhav29@gmail.com")
  await page.locator("[name=cardNumber]").fill("4242 4242 4242 4242")
  await page.locator("[name=cardExpiry]").fill("12/34")
  await page.locator("[name=cardCvc]").fill("213")
  await page.locator("[name=billingName]").fill("Kaushik Anubhav")
  await page.locator("[name=cardCvc]").fill("213")
  await page.getByLabel("Country or region").selectOption("India")
  await page.getByRole("button", { name: "Pay" }).click()
})
