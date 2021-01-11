import React from 'react';
import {
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@material-ui/core';

const Pagination = (props) => {
	const { valueToOrderBy, orderDirection, handleRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		handleRequestSort(event, property);
	};
	return (
		<TableHead>
			<TableRow>
				<TableCell style={{ width: '20%' }} key='name'>
					<TableSortLabel
						active={valueToOrderBy === 'name'}
						direction={valueToOrderBy === 'name' ? orderDirection : 'asc'}
						onClick={createSortHandler('name')}
					>
						Name
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }} key='id'>
					<TableSortLabel
						active={valueToOrderBy === 'id'}
						direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
						onClick={createSortHandler('id')}
					>
						ID
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '30%' }} key='address'>
					<TableSortLabel
						active={valueToOrderBy === 'address'}
						direction={valueToOrderBy === 'address' ? orderDirection : 'asc'}
						onClick={createSortHandler('address')}
					>
						Address
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='state'>
					<TableSortLabel
						active={valueToOrderBy === 'state'}
						direction={valueToOrderBy === 'state' ? orderDirection : 'asc'}
						onClick={createSortHandler('state')}
					>
						State
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'city'}
						direction={valueToOrderBy === 'city' ? orderDirection : 'asc'}
						onClick={createSortHandler('city')}
					>
						city
					</TableSortLabel>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default Pagination;
