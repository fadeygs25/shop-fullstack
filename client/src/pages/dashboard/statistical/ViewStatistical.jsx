import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import {
    ClockIcon,
    CheckIcon,
    EllipsisVerticalIcon,
    ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
    statisticsCardsData,
    statisticsChartsData,
    projectsTableData,
    ordersOverviewData,
} from "@/data";

export function ViewStatistical() {
    return (
        <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <StatisticsCard
                
                    footer={
                        <Typography className="font-normal text-blue-gray-600">
                        </Typography>
                    }
                />
                <StatisticsCard
                    footer={
                        <Typography className="font-normal text-blue-gray-600">
                        </Typography>
                    }
                />
                <StatisticsCard
                    footer={
                        <Typography className="font-normal text-blue-gray-600">
                        </Typography>
                    }
                />
                <StatisticsCard
                    footer={
                        <Typography className="font-normal text-blue-gray-600">
                        </Typography>
                    }
                />
            </div>
        </div>
    );
}

export default ViewStatistical;
