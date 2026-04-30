import React from 'react';
import {Label, ListBox, Select} from "@heroui/react";

const SortedList = () => {
    return (
        <div>
            <Select className="w-[256px]" placeholder="Select one">
      <Label>Sort by price</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="default" textValue="Default">
            Default
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="low" textValue="Low to High">
            Low to High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="high" textValue="High to Low">
            High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>
        </div>
    );
};

export default SortedList;