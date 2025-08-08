export type PaginationInfo = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

export type ApiResponse<T> = {
  pagination: PaginationInfo;
  data: T[];
};