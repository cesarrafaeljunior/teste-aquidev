import prisma from "../../database/connect.database";
import {
  iCategory,
  iProduct,
  iProductResponse,
} from "../../interfaces/product.interface";
import { returnProductSchema } from "../../schemas/product.schemas";
import { findOrCreateCategory } from "../../utils/product/findOrCreateCategory.utils";
import { findProductName } from "../../utils/product/findProductName.utils";

export const createProductService = async (
  productData: iProduct
): Promise<iProductResponse> => {
  await findProductName(productData.name);

  const category: iCategory = await findOrCreateCategory(
    productData.category.name.toLowerCase()
  );

  const product: iProductResponse = await prisma.product.create({
    data: {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      stock: productData.stock,
      category: {
        connect: { id: category.id },
      },
    },
    include: {
      category: true,
    },
  });

  const productResponse: iProductResponse = returnProductSchema.parse(product);

  return productResponse;
};
