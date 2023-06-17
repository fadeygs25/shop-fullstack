import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button
} from "@material-tailwind/react";
import { useProducts } from "@/store/context/ProductContext";
import { useCategories } from "@/store/context/CategoryContext";

export function ViewProduct({ product }) {
    const { deleteProduct } = useProducts();
    const { categoriesById, getCategoryById } = useCategories();
    const [singleCategory, setSingleCategory] = React.useState(null);
    React.useEffect(() => {
        if (!singleCategory) {
            getCategoryById(product.categoryId)
        }

        if (categoriesById?._id === product.categoryId) {
            setSingleCategory(categoriesById)
        }
    }, [categoriesById, product.categoryId, getCategoryById])

    const handleDelete = () => {
        deleteProduct(product._id);
    }

    return (
        <tr key={product._id}>
            <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                    <Avatar src={product.image} alt={product.name} size="sm" />
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                        >
                            {product.nameProduct}
                        </Typography>
                    </div>
                </div>
            </td>
            <td className="py-3 px-5 border-b border-blue-gray-50">
                <Typography className="text-xs font-semibold text-blue-gray-600">
                    ${product.price}
                </Typography>
            </td>
            <td className="py-3 px-5 border-b border-blue-gray-50">
                <Typography className="text-xs font-semibold text-blue-gray-600">
                    {singleCategory?.nameCategory}
                </Typography>
            </td>
            <td className="py-3 px-5 border-b border-blue-gray-50">
                <Typography
                    as="a"
                    href="#"
                    className="text-xs font-semibold text-blue-gray-600"
                    onClick={() => setOpenEditProduct(dispatch, true)}
                >
                    Edit
                </Typography>
            </td>
            <td className="py-3 px-5 border-b border-blue-gray-50">
                <Typography
                    as="a"
                    href="#"
                    className="text-xs font-semibold text-blue-gray-600"
                    onClick={handleDelete}
                >
                    Delete
                </Typography>
            </td>
        </tr>

    );
}

export default ViewProduct
